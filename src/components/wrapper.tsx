import { banner } from "@/resources/once-ui.config";
import { Column, Row } from "@once-ui-system/core";
import { Cart } from "@/lib/types";
import { ReactNode } from "react";
import { CartProvider } from "./cart/cart-context";
import { Header } from "./layout/header/Header";

export function Wrapper({
	children,
	currency,
	cart
}: {
	children: ReactNode,
	currency: string,
	cart: Promise<Cart | undefined>
}) {
	return (
		<CartProvider cartPromise={cart}>
			{banner.display && (
				<Row paddingX="16" paddingY="8" solid="brand-medium" onSolid="brand-strong" textVariant="label-default-s" align="center" center gap="12">
					{banner.content}
				</Row>
			)}
			<Column
				fillWidth horizontal="center">
				<Header currency={currency} />
				<Column
					as="main"
					fillWidth
					horizontal="center">
					{children}
				</Column>
				{/* Toaster 
				<Toaster closeButton />
				*/}
			</Column>
		</CartProvider>
	)
}