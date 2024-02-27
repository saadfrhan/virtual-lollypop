import CreateLollyForm from "@/components/create-lolly-form";
import Header from "@/components/header";
import { lollipops } from "@/lib/constants";

export const metadata = {
	title: "Create Lolly!",
};

export default function CreateLolly({
	searchParams,
}: {
	searchParams: {
		flavour: number;
	};
}) {
	return (
		<div className="min-h-screen">
			<Header />
			<CreateLollyForm premade={lollipops[searchParams.flavour]} />
		</div>
	);
}
