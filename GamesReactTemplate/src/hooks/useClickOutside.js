import { useEffect } from "react";

function useClickOutside(ref, setState) {
    useEffect(() => {
        /**
         * Close the dropdown if clicked on outside of element
         */
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setState(false);
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setState]);
}

export default useClickOutside;
