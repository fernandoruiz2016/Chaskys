export const Resumen = ({ totalAmount, rating, km }) => {
    return (
        <>
            <section className="card brief">
                <p>Resumen Semanal</p>
                <div className="brief-info">
                    <div className="brief-info-stat">
                        <p className="brief-subtitle">Propinas</p>
                        <p className="brief-stat">S/. {(totalAmount*0.05).toFixed(2)}</p>
                    </div>
                    <div className="brief-info-stat">
                        <p className="brief-subtitle">Valoración</p>
                        <p className="brief-stat">{rating}</p>
                    </div>
                    <div className="brief-info-stat">
                        <p className="brief-subtitle">Km recorridos</p>
                        <p className="brief-stat">{km}</p>
                    </div>
                    <div className="brief-info-stat">
                        <p className="brief-subtitle">Ganancias por km</p>
                        <p className="brief-stat">S/. {(totalAmount/km).toFixed(2)}</p>
                    </div>
                </div>
            </section>
        </>
    )
}