import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";
import { AppLayout } from "./layouts/AppLayout";
import { ThemeLayout } from "./layouts/ThemeLayout";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeLayout>
				<AppLayout>
					<App />
				</AppLayout>
			</ThemeLayout>
		</BrowserRouter>
	</Provider>,
);
