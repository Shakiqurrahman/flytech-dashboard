import React from "react";

const Community = ({ community, setCommunity }) => {
    const handleInputChange = (index, field, value) => {
        const updated = [...community];
        updated[index][field] = value;
        setCommunity(updated);
    };

    return (
        <div>
            <p className="text-gray-500">Community</p>
            {community.map((group, index) => (
                <div key={index} className="w-full *:w-full space-y-2 mt-2">
                    <p className="px-2 text-sm text-gray-500">
                        Group {index + 1}
                    </p>
                    <input
                        type="text"
                        value={group.title}
                        onChange={(e) =>
                            handleInputChange(index, "title", e.target.value)
                        }
                        placeholder="Enter title"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <input
                        type="text"
                        value={group.linkTitle}
                        onChange={(e) =>
                            handleInputChange(
                                index,
                                "linkTitle",
                                e.target.value
                            )
                        }
                        placeholder="Enter Link Title"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <input
                        type="text"
                        value={group.link}
                        onChange={(e) =>
                            handleInputChange(index, "link", e.target.value)
                        }
                        placeholder="Enter Link"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                </div>
            ))}
        </div>
    );
};

export default Community;
