// Componente para o card da Rádio
const CardRadio = ({ radio }) => (
  <a
    href={radio.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-2xl bg-white p-8 text-center no-underline shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
  >
    <div
      className={`h-16 w-16 ${radio.bgColor} mx-auto mb-4 flex items-center justify-center rounded-lg`}
    >
      <span className="text-3xl">📻</span>
    </div>
    <h3
      className="title-font mb-2 text-xl font-bold"
      style={{ color: radio.color }}
    >
      {radio.name}
    </h3>
    <p className="mb-4 text-gray-600">{radio.description}</p>
    <div className={`${radio.lightBgColor} mb-4 rounded-lg p-4 text-left`}>
      {radio.features.map((feature, index) => (
        <p key={index} className={`${radio.textColor} text-sm font-semibold`}>
          {index === 0 ? '🎧' : '📢'} {feature}
        </p>
      ))}
    </div>
    <span className="inline-block rounded-lg border-none bg-red-500 px-6 py-2 text-center text-sm font-semibold text-white no-underline transition-all duration-300">
      Ouvir Agora
    </span>
  </a>
);

export default CardRadio;
