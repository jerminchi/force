import React, { FC } from "react"
import {
  Box,
  Column,
  GridColumns,
  Input,
  Text,
  Select,
  Flex,
  RadioGroup,
  Radio,
  LabeledInput,
  InfoCircleIcon,
} from "@artsy/palette"
import { Form, useFormikContext } from "formik"

const rarityOptions = [
  { text: "Unique, Limited Edition, Open Edition…", value: "default" },
  { text: "Unique", value: "Unique" },
  { text: "Limited Edition", value: "Limited Edition" },
  { text: "Open Edition", value: "Open Edition" },
  { text: "Unknown Edinion", value: "Unknown Edinion" },
]

const mediumOptions = [
  { text: "Painting, Print, Sculpture…", value: "default" },
  { text: "Painting", value: "painting" },
  { text: "Photography", value: "photography" },
  { text: "Sculpture", value: "sculpture" },
  { text: "Prints", value: "prints" },
  { text: "Work on Paper", value: "work-on-paper" },
  { text: "Design", value: "design" },
  { text: "Drawing", value: "drawing" },
  { text: "Installation", value: "installation" },
  { text: "Film/Video", value: "film-slash-video" },
  { text: "Jewelry", value: "jewelry" },
  { text: "Performance Art", value: "performance-art" },
  { text: "Reproduction", value: "reproduction" },
  { text: "Ephemera or Merchandise", value: "ephemera-or-merchandise" },
]

export interface ArtworkDetailsFormModel {
  artist: string
  year: string
  title: string
  medium: string
  rarity: string
  editionNumber: string
  editionSize: string
  heigth: string
  width: string
  depth: string
  units: string
}

export const ArtworkDetailsForm: FC = () => {
  const { values, handleChange, setFieldValue } = useFormikContext<
    ArtworkDetailsFormModel
  >()
  const uniqueRarity = values.rarity === "Unique"

  return (
    <Form>
      <GridColumns>
        <Column span={6}>
          <Input
            title="Artist"
            placeholder="Enter Full Name"
            name="artist"
            onChange={handleChange}
            value={values.artist || ""}
          />
        </Column>
        <Column span={6} mt={[2, 0]}>
          <Input
            title="year"
            placeholder="YYYY"
            name="year"
            onChange={handleChange}
            value={values.year || ""}
          />
        </Column>
      </GridColumns>
      <GridColumns mt={[2, 4]}>
        <Column span={6}>
          <Input
            title="Title"
            placeholder="Add Title or Write “Unknown”"
            name="title"
            onChange={handleChange}
            value={values.title || ""}
          />
        </Column>
        <Column span={6} mt={[2, 0]}>
          <Text variant="xs" mb={0.5} textTransform="uppercase">
            Medium
          </Text>
          <Select
            name="medium"
            options={mediumOptions}
            selected={values.medium}
            onSelect={selected => {
              setFieldValue("medium", selected)
            }}
          />
        </Column>
      </GridColumns>
      <GridColumns mt={[2, 4]}>
        <Column span={6}>
          <Flex justifyContent="space-between">
            <Text variant="xs" mb={0.5} textTransform="uppercase">
              Rarity
            </Text>
            <InfoCircleIcon />
          </Flex>
          <Select
            name="rarity"
            options={rarityOptions}
            selected={values.rarity}
            onSelect={selected => {
              setFieldValue("rarity", selected)
            }}
          />
        </Column>
        <Column span={6}>
          {!uniqueRarity && (
            <Flex alignItems="center" mt={[2, 0]}>
              <Input
                title="Edition Number"
                placeholder="Your Work’s #"
                name="editionNumber"
                onChange={handleChange}
                value={values.editionNumber || ""}
              />
              <Box paddingX={[0.5, 2]} mt={2}>
                /
              </Box>
              <Input
                title="Edition Size"
                placeholder="Total # in Edition"
                name="editionSize"
                onChange={handleChange}
                value={values.editionSize || ""}
              />
            </Flex>
          )}
        </Column>
      </GridColumns>
      <GridColumns mt={[2, 4]}>
        <Column span={6}>
          <Flex alignItems="center">
            <Box width="50%" mr={2}>
              <Text variant="xs" mb={0.5} mr={0.5} textTransform="uppercase">
                Height
              </Text>
              <LabeledInput label={values.units} name="height" />
            </Box>
            <Box width="50%">
              <Text variant="xs" mb={0.5} mr={0.5} textTransform="uppercase">
                Width
              </Text>
              <LabeledInput label={values.units} name="width" />
            </Box>
          </Flex>
        </Column>
        <Column span={6} mt={[2, 0]}>
          <Flex alignItems="center">
            <Box pr={[0, 1]} width="50%">
              <Flex>
                <Text variant="xs" mb={0.5} mr={0.5} textTransform="uppercase">
                  Depth
                </Text>
                <Text variant="xs" color="black60">
                  (Optional)
                </Text>
              </Flex>
              <LabeledInput
                label={values.units}
                name="depth"
                onChange={handleChange}
                value={values.depth || ""}
              />
            </Box>
            <RadioGroup
              width="50%"
              defaultValue={values.units}
              flexDirection="row"
              mt={2}
              ml={2}
              onSelect={selected => {
                setFieldValue("units", selected)
              }}
            >
              <Radio mr={4} value="in" label="in" selected />
              <Radio value="cm" label="cm" />
            </RadioGroup>
          </Flex>
        </Column>
      </GridColumns>
    </Form>
  )
}
