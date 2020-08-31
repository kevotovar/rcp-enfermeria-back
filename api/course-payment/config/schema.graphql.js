const strapi = require("strapi");

module.exports = {
  definition: `
    input RegisterCourseInput {
      course: ID
    }
    input registerCourseInput {
      data: RegisterCourseInput
    }
    type registerCoursePayload {
      coursePayment: CoursePayment
    }
  `,
  query: ``,
  mutation: `
    registerCourse(input: registerCourseInput): registerCoursePayload
  `,
  type: {},
  resolver: {
    Query: {},
    Mutation: {
      registerCourse: {
        description: "Register authenticated user to a course",
        policies: ["plugins::users-permissions.isAuthenticated"],
        resolverOf: "application::course-payment.course-payment.find",
        resolver: async function (obj, options, { context }) {
          console.log(context);
        },
      },
    },
  },
};
