import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'

export default defineConfig({
  title: "orbitntnu-web",
  projectId: "zx40gv7m",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  }),
  visionTool()
  ],
  schema: {
    types: schemas,
  },
});