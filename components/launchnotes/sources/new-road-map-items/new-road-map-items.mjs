import { axios } from "@pipedream/platform";

const query = `
  query RoadmapBoard($projectId: ID!) {
  project(id: $projectId) {
    workItems(archived: false) {
        nodes {
          id
          stageId
          name
          content
          position
          categories {
            id
            name
          }
          stage {
            id
            name
            position
          }
        }
      }
    }
  }
`;

export default {
  key: "launchnotes-new-roadmap-item",
  name: "New Roadmap Item",
  description: "Emit new event for each new Roadmap item on your Roadmap",
  version: "0.0.1",
  type: "source",
  dedupe: "unique",
  props: {
    project: {
      propDefinition: [
        "project"
      ],
    },
  },
  async run({ $ }) {
    const res = await this.request($, query, { "projectId": this.props.projectId });
    console.log(res)
  }
}
