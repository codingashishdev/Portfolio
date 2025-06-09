import React from "react";

function CertificationCard({ name, issuedBy, date, imgageUrl, credentials_link, clas}) {
    return (
        <div className="w-48 bg-white border border-gray-200 rounded-lg p-4 flex flex-col">
            <img
                className="w-16 h-16 object-contain mx-auto mb-3"
                src={imgageUrl}
                alt={`${name} certificate`}
            />
            
            <h3 className="text-sm font-semibold text-gray-900 text-center mb-2 line-clamp-2">
                {name}
            </h3>
            
            <p className="text-xs text-gray-600 text-center mb-1">{issuedBy}</p>
            <p className="text-xs text-gray-500 text-center mb-3">{date}</p>
            
            <a
                href={credentials_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-gray-900 hover:bg-black text-white text-xs py-2 px-3 rounded text-center transition-colors"
            >
                Credentials
            </a>
        </div>
    );
}

export default CertificationCard;
