const InfoCard = ({ icon, title, color, children }) => (
    <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
        <div className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold mb-4 title-font" style={{ color }}>
            {children[0]}
        </h3>
        <p className="text-gray-700">
            {children[1]}
        </p>
    </div>
);

export default InfoCard;