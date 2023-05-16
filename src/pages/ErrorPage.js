import { Link } from "react-router-dom"
function ErrorPage() {
    return (
        <div className="grid place-items-center">
            <h1 className="text-2xl">I'm Sorry this Page doesn't exist</h1>
            <h1 className="text-2xl m-10">
                😭
            </h1>
            <h1 className="text-2xl">
                <Link to="/">
                    👉🏿
                    GO  Home!!
                </Link>
            </h1>
        </div>
    )
}

export default ErrorPage