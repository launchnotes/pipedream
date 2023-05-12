export default {
  type: "app",
  app: "launchnotes",
  propDefinitions: {
    projectId: {
      type: "string",
      label: "Project ID",
      description: "Your project's ID",

    }
  },
  methods: {
    request ($, query, variables) {
      var options = {
        method: 'POST',
        url: 'https://app.launchnotes.io/graphql',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.$auth.api_key}`
        },
        data: JSON.stringify({
          query,
          variables,
        }),
      };

      return axios.request(options);
    }
  }
}