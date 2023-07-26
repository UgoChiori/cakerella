export default function NavigationBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Cakerella</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Cakerella</title>
                        <path d="M0 0h20v20H0z" fill="none"/>
                        <path
                            d="M0 4h20v1.5H0zM0 8h20v1.5H0zM0 12h20v1.5H0zM0 16h20v1.5H0z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                </div>
                <div>
                    <a href="/frontpage"
                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/about"
                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                       About
                    </a>
                    <a href="/bakers"
                       className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Bakers
                    </a>
                </div>
            </div>
        </nav>
    )
}