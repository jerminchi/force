import loadable from "@loadable/component"
import { Redirect, RedirectException } from "found"
import { graphql } from "react-relay"
import { AppRouteConfig } from "System/Router/Route"
import { getENV } from "Utils/getENV"
import { getRedirect } from "./Routes/SubmissionFlow/Utils/redirects"

const MarketingLandingApp = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/MarketingLanding/MarketingLandingApp"
    ),
  {
    resolveComponent: component => component.MarketingLandingApp,
  }
)

const SubmissionLayout = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/SubmissionLayout"
    ),
  {
    resolveComponent: component => component.SubmissionLayout,
  }
)

const ArtworkDetailsFragmentContainer = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ArtworkDetails/ArtworkDetails"
    ),
  {
    resolveComponent: component => component.ArtworkDetailsFragmentContainer,
  }
)

const ArtworkDetails = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ArtworkDetails/ArtworkDetails"
    ),
  {
    resolveComponent: component => component.ArtworkDetails,
  }
)

const UploadPhotosFragmentContainer = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/UploadPhotos/UploadPhotos"
    ),
  {
    resolveComponent: component => component.UploadPhotosFragmentContainer,
  }
)

const ContactInformation = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ContactInformation/ContactInformation"
    ),
  {
    resolveComponent: component =>
      component.ContactInformationFragmentContainer,
  }
)

const ThankYou = loadable(
  () =>
    import(
      /* webpackChunkName: "consignBundle" */ "./Routes/SubmissionFlow/ThankYou/ThankYou"
    ),
  {
    resolveComponent: component => component.ThankYou,
  }
)

const renderSubmissionFlowStep = ({ Component, props, match, resolving }) => {
  if (!(Component && props)) {
    return undefined
  }

  if (resolving) {
    const { submission } = props as any
    const redirectTo = getRedirect(props.router, match, submission)

    if (redirectTo) {
      throw new RedirectException(redirectTo)
    }
  }

  return <Component {...props} />
}

const prepareSubmissionFlowStepVariables = data => {
  let searchFields = { id: data.id, externalId: null }

  // This code is here to support externalId UUIDs in url
  // (i.e. /submissions/:id/something and :id is an UUID).
  // If :id in url is not a number - the code passes
  // externalId to metaphysics instead of id.
  const sequentialIdRegex = new RegExp(/^\d+$/)
  if (!sequentialIdRegex.test(data.id)) {
    searchFields.externalId = data.id
    searchFields.id = null
  }

  return {
    ...data,
    ...searchFields,
    sessionID: getENV("SESSION_ID"),
  }
}

export const consignRoutes: AppRouteConfig[] = [
  {
    path: "/sell",
    getComponent: () => MarketingLandingApp,
    onClientSideRender: () => {
      MarketingLandingApp.preload()
    },
  },
  {
    path: "/consign",
    children: [
      {
        path: ":splat*",
        render: ({ match }) => {
          throw new RedirectException(
            `${match.location.pathname.replace("/consign", "/sell")}${
              match.location.search
            }`,
            301
          )
        },
      },
      {
        path: "/",
        render: ({ match }) => {
          throw new RedirectException("/sell", 301)
        },
      },
    ],
  },
  {
    path: "/sell/submission",
    getComponent: () => SubmissionLayout,
    children: [
      new Redirect({
        from: "/",
        to: "/sell/submission/artwork-details",
      }) as any,
      {
        path: "artwork-details",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ArtworkDetails,
        onClientSideRender: () => {
          ArtworkDetails.preload()
        },
      },
      {
        path: ":id/artwork-details",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ArtworkDetailsFragmentContainer,
        onClientSideRender: () => {
          ArtworkDetailsFragmentContainer.preload()
        },
        query: graphql`
          query consignRoutes_artworkDetailsQuery(
            $id: ID
            $externalId: ID
            $sessionID: String
          ) {
            submission(
              id: $id
              externalId: $externalId
              sessionID: $sessionID
            ) {
              ...ArtworkDetails_submission
              ...redirects_submission @relay(mask: false)
            }
          }
        `,
        prepareVariables: prepareSubmissionFlowStepVariables,
        render: renderSubmissionFlowStep,
      },
      {
        path: ":id/upload-photos",
        hideNav: true,
        hideFooter: true,
        getComponent: () => UploadPhotosFragmentContainer,
        onClientSideRender: () => {
          UploadPhotosFragmentContainer.preload()
        },
        query: graphql`
          query consignRoutes_uploadPhotosQuery(
            $id: ID
            $externalId: ID
            $sessionID: String
          ) {
            submission(
              id: $id
              externalId: $externalId
              sessionID: $sessionID
            ) {
              ...UploadPhotos_submission
              ...redirects_submission @relay(mask: false)
            }
          }
        `,
        prepareVariables: prepareSubmissionFlowStepVariables,
        render: renderSubmissionFlowStep,
      },
      {
        path: ":id/contact-information",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ContactInformation,
        onClientSideRender: () => {
          ContactInformation.preload()
        },
        query: graphql`
          query consignRoutes_contactInformationQuery(
            $id: ID
            $externalId: ID
            $sessionID: String
          ) {
            submission(
              id: $id
              externalId: $externalId
              sessionID: $sessionID
            ) {
              ...ContactInformation_submission
              ...redirects_submission @relay(mask: false)
            }
            me {
              ...ContactInformation_me
            }
          }
        `,
        render: renderSubmissionFlowStep,
        prepareVariables: prepareSubmissionFlowStepVariables,
      },
      {
        path: ":id/thank-you",
        hideNav: true,
        hideFooter: true,
        getComponent: () => ThankYou,
        onClientSideRender: () => {
          ThankYou.preload()
        },
      },
    ],
  },
]