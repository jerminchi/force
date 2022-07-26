import { useContext } from "react"
import * as React from "react"
import {
  ArtworkIcon,
  BellIcon,
  HeartIcon,
  PowerIcon,
  ReceiptIcon,
  Separator,
  SettingsIcon,
  SoloIcon,
  Text,
} from "@artsy/palette"
import * as DeprecatedAnalyticsSchema from "@artsy/cohesion/dist/DeprecatedSchema"
import { SystemContext } from "System"
import { useTracking } from "react-tracking"
import { userIsAdmin } from "Utils/user"
import { NavBarMenuItemButton, NavBarMenuItemLink } from "./NavBarMenuItem"
import { getENV } from "Utils/getENV"
import { useFeatureFlag } from "System/useFeatureFlag"

export const NavBarUserMenu: React.FC = () => {
  const { trackEvent } = useTracking()
  const { mediator, user } = useContext(SystemContext)

  const trackClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const link = event.currentTarget

    if (!(link instanceof HTMLAnchorElement)) return

    const text = link.innerText
    const href = link.getAttribute("href")

    trackEvent({
      action_type: DeprecatedAnalyticsSchema.ActionType.Click,
      // @ts-ignore
      context_module:
        DeprecatedAnalyticsSchema.ContextModule.HeaderUserDropdown,
      subject: text,
      destination_path: href!,
    })
  }

  const isAdmin = userIsAdmin(user)
  const hasPartnerAccess = Boolean(user?.has_partner_access)

  const isMyCollectionEnabled = useFeatureFlag("my-collection-web")

  return (
    <Text variant="sm" py={1} width={230}>
      {isAdmin && (
        <NavBarMenuItemLink to={getENV("ADMIN_URL")} onClick={trackClick}>
          Admin
        </NavBarMenuItemLink>
      )}

      {(isAdmin || hasPartnerAccess) && (
        <>
          <NavBarMenuItemLink to={getENV("CMS_URL")} onClick={trackClick}>
            CMS
          </NavBarMenuItemLink>

          <Separator as="hr" my={1} />
        </>
      )}

      <NavBarMenuItemLink
        aria-label="View your purchases"
        to="/settings/purchases"
        onClick={trackClick}
      >
        <ReceiptIcon mr={1} aria-hidden="true" /> Order History
      </NavBarMenuItemLink>

      <NavBarMenuItemLink
        aria-label="View your alerts"
        to="/settings/alerts"
        onClick={trackClick}
      >
        <BellIcon mr={1} aria-hidden="true" /> Alerts
      </NavBarMenuItemLink>

      <NavBarMenuItemLink
        aria-label="View your Saves &amp; Follows"
        to="/settings/saves"
        onClick={trackClick}
      >
        <HeartIcon mr={1} aria-hidden="true" /> Saves &amp; Follows
      </NavBarMenuItemLink>

      <NavBarMenuItemLink
        aria-label="View your Collector Profile"
        to="/settings/edit-profile"
        onClick={trackClick}
      >
        <SoloIcon mr={1} aria-hidden="true" /> Collector Profile
      </NavBarMenuItemLink>

      {isMyCollectionEnabled && (
        <NavBarMenuItemLink
          aria-label="View your Collection"
          to="/settings/my-collection"
          onClick={trackClick}
        >
          <ArtworkIcon mr={1} aria-hidden="true" /> My Collection
        </NavBarMenuItemLink>
      )}

      <NavBarMenuItemLink
        aria-label="Edit your settings"
        to="/settings/edit-settings"
        onClick={trackClick}
      >
        <SettingsIcon mr={1} aria-hidden="true" /> Settings
      </NavBarMenuItemLink>

      <NavBarMenuItemButton
        aria-label="Log out of your account"
        onClick={() => {
          mediator?.trigger("auth:logout")
        }}
      >
        <PowerIcon mr={1} aria-hidden="true" /> Log out
      </NavBarMenuItemButton>
    </Text>
  )
}