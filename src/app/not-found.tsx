import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<div>
			<section className="bg-primary min-h-screen flex justify-center items-center font-[family-name:var(--font-mont)]">
				<div className="py-8 px-4 m-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold text-foreground md:text-4xl">
							Something&apos;s missing.
						</p>
						<p className="mb-4 text-lg font-light text-foreground">
							Sorry, we can&apos;t find that page. You&apos;ll find lots to
							explore on the home page.{" "}
						</p>
						<Link
							href="/"
							className="inline-flex transition-colors text-foreground bg-accent hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
						>
							Back to Homepage
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NotFound;
