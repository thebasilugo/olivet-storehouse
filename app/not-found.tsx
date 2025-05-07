import Link from "next/link";
// import { Button } from "@/components/ui/button"

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
			<h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
			<h2 className="text-2xl font-semibold text-gray-700 mb-6">
				Page Not Found
			</h2>
			<p className="text-gray-600 mb-8 max-w-md">
				The page you are looking for might have been removed, had its name
				changed, or is temporarily unavailable.
			</p>
			{/* <Button asChild className="bg-orange-600 hover:bg-orange-700"> */}
			<Link href="/">Return to Homepage</Link>
			{/* </Button> */}
		</div>
	);
}
