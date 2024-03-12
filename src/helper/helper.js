export const activeRouter = (path, router) => {
    const pathArr = path.split("/");

    return pathArr.includes(router)
}