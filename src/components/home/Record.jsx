<<<<<<< HEAD
export const RecordHome = ({record, total, onViewHistorial}) => {
=======
export const RecordHome = () => {
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
  return (
    <section className="card record-home">
      <div className="record-summary">
        <div>
          <span>Record: </span>
<<<<<<< HEAD
          <span>{record}</span>
        </div>
        <div>
          <span>Total: </span>
          <span>{total}</span>
        </div>
      </div>
      <div className="record-view-history" onClick={onViewHistorial}>
=======
          <span>253</span>
        </div>
        <div>
          <span>Total: </span>
          <span>32</span>
        </div>
      </div>
      <div className="record-view-history">
>>>>>>> 18fb091b9b9478649c9c141dc496cf59ba7e4b05
        <span>Ver Historial</span>
      </div>
    </section>
  );
};
