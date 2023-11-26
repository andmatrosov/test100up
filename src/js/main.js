import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import { getHeaderHeight } from "./functions/header-height";

getHeaderHeight();
window.addEventListener("resize", () => getHeaderHeight());
