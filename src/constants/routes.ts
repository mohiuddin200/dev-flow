const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    ASK_QUESTION: "/ask-question",
    COLLECTION: "/collection",
    COMMUNITY: "/community",
    TAGS: "/tags",
    TAG: (id: string) => `/tags/${id}`,
    PROFILE: (id: string) => `/profile/${id}`,
    QUESTION: (id: string) => `/questions/${id}`,
    JOBS: "/jobs",
    SIGN_IN_WITH_OAUTH: "/signin-with-oauth",
    NOT_FOUND: "*",
}

export default ROUTES;