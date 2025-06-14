
const ListItem = ({children}) => {
    return (
        <li className="flex items-center gap-2 my-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-green-600 size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg>
            {children}
        </li>
    );
}

export default ListItem;