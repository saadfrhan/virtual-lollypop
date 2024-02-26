import Lolly from "@/components/lolly";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/lib/utils";
import { query as q } from "faunadb";
import Link from "next/link";
import ShareButton from "@/components/share-button";

export const revalidate = 1;

export default async function Page({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: {
		view: "public";
	};
}) {
	async function getLolly(slug: string) {
		const result = await client.query<{
			data: {
				flavorTop: string;
				flavorMiddle: string;
				flavorBottom: string;
				from: string;
				message: string;
				slug: string;
				to: string;
			};
		}>(q.Get(q.Match(q.Index("lolly_by_slug"), slug)));
		return result.data;
	}

	const lollyData = await getLolly(params.slug);
	const link = `https://virtual-lollypop.vercel.app/lolly/${lollyData.slug}?view=to`;

	return (
		<div>
			<div className="rounded-lg shadow-md flex max-md:flex-col justify-center min-h-screen items-center gap-14 container w-full">
				<Lolly
					flavourTop={lollyData.flavorTop}
					flavourMiddle={lollyData.flavorMiddle}
					flavourBottom={lollyData.flavorBottom}
				/>
				<div className="space-y-2">
					<div className="border-black border-2 rounded-sm">
						<div className="max-w-sm mx-auto relative bg-[rgba(204,_204,_204,_0.5)]  rounded-sm shadow-md overflow-hidden">
							<div className="p-5">
								<div className="mb-3">
									<p className="text-lg font-semibold text-white">From</p>
									<p className="text-xl font-bold text-gray-800">{lollyData.from}</p>
								</div>
								<div className="mb-3">
									<p className="text-lg font-semibold text-white">To</p>
									<p className="text-xl font-bold text-gray-800">{lollyData.to}</p>
								</div>
								<div className="mb-3">
									<p className="text-lg font-semibold text-white">Message</p>
									<p className="text-md text-gray-600">{lollyData.message}</p>
								</div>
							</div>
						</div>


					</div>
					{searchParams.view !== "public" && (
						<ShareButton slug={lollyData.slug} />
					)}
				</div>
			</div>
			<Link
				href="/create-lolly"
				className={buttonVariants({
					variant: "link",
					className: "text-center flex w-full",
				})}
			>
				Want to create your own?
			</Link>
		</div>
	);
}
