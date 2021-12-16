import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailScr from "./routes/DetailScr";
import ScrMain from "./routes/ScrMain";

function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                {/* <Route path={"/:scrCode"}>
                    <DetailScr />
                </Route> */}
                <Route path="/">
                    <ScrMain />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;