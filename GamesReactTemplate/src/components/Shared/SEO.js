import { Helmet } from "react-helmet";

import React from "react";
import useGetMeta from "../../hooks/useGetMeta";

function SEO() {
    const meta = useGetMeta();
    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            {meta.metaOG.map((element, index) => (
                <meta
                    property={element.property}
                    content={element.content}
                    key={index}
                />
            ))}
            <meta name="keywords" content={meta.keyWords} />
        </Helmet>
    );
}

export default SEO;
