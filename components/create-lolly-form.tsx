"use client";

import { useEffect, useState } from "react";
import Lolly from "./lolly";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "./auto-form";
import createLolly from "@/actions/create-lolly";
import { redirect, useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

interface Flavours {
	flavourTop: string;
	flavourMiddle: string;
	flavourBottom: string;
}

const CreateLollyForm = ({ premade }: { premade?: Flavours }) => {
	const [flavors, setFlavors] = useState({
		flavorTop: "#A4193B",
		flavorMiddle: "#DF4343",
		flavorBottom: "#DB2929",
	});

	useEffect(() => {
		setFlavors({
			flavorTop: premade?.flavourTop ?? "#A4193B",
			flavorMiddle: premade?.flavourMiddle ?? "#DF4343",
			flavorBottom: premade?.flavourBottom ?? "#DB2929",
		});
	}, [premade]);

	const formSchema = z.object({
		from: z.string().max(50),
		to: z.string().max(50),
		message: z.string().max(250),
	});

	const { push } = useRouter();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const slug = uuid();
		await createLolly({ ...values, ...flavors, slug });
		push(`/lolly/${slug}`);
	};

	return (
		<div className="p-8 rounded-lg shadow-md flex justify-center items-center">
			<div className="flex gap-12 max-md:flex-col justify-center items-center w-full">
				<AutoForm
					formSchema={formSchema}
					onSubmit={onSubmit}
					className="max-md:w-full w-[30%]"
					fieldConfig={{
						message: {
							fieldType: "textarea",

						},
					}}
				>
					<AutoFormSubmit>Freeze</AutoFormSubmit>
				</AutoForm>
				<div className="flex gap-12">
					<Lolly
						flavourTop={flavors.flavorTop}
						flavourMiddle={flavors.flavorMiddle}
						flavourBottom={flavors.flavorBottom}
					/>
					<div className="flex flex-col h-80 justify-between">
						{["Top", "Middle", "Bottom"].map((flavor) => (
							<label key={flavor} htmlFor={`${flavor}Flavor`}>
								<input
									className="w-16 h-16 md:w-20 md:h-20"
									value={
										flavors[
										`flavor${flavor.charAt(0).toUpperCase() + flavor.slice(1)
										}` as keyof typeof flavors
										]
									}
									type="color"
									name={`${flavor}Flavor`}
									id={`${flavor}Flavor`}
									onChange={(e) => {
										setFlavors({
											...flavors,
											[`flavor${flavor.charAt(0).toUpperCase() + flavor.slice(1)
												}`]: e.target.value,
										});
									}}
								/>
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateLollyForm;
