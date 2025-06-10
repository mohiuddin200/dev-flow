const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    ASK_QUESTION: "/ask-question",
    SIGN_IN_WITH_OAUTH: "/signin-with-oauth",
    QUESTION: (id: string) => `/questions/${id}`,
    PROFILE: (id: string) => `/profile/${id}`,
    TAGS: (id: string) => `/tags/${id}`,
    NOT_FOUND: "*",
}

export default ROUTES;