export const routes = [
    {
        path: "",
        //loadChildren: () => require("./examples-list.module")["ExamplesListModule"],
        data: { title: "NativeScript Code Samples" }
    },
    {
        path: "login",
        //loadChildren: () => require("./login/login.module")["LoginModule"],
        data: { title: "NativeScript Code Samples" }
    }
]