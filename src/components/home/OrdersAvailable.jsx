export const OrdersAvailableHome = ({ total, onViewOrdersAvailable }) => {
  return (
    <section className="card record-home">
      <div className="record-view-orders" onClick={onViewOrdersAvailable}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.44067 13.9407C2.85474 14.5267 2.85474 15.4782 3.44067 16.0642L10.9407 23.5642C11.5266 24.1501 12.4782 24.1501 13.0641 23.5642C13.65 22.9782 13.65 22.0267 13.0641 21.4407L8.12349 16.5001H25.5C26.3297 16.5001 27 15.8298 27 15.0001C27 14.1704 26.3297 13.5001 25.5 13.5001H8.12349L13.0641 8.55947C13.65 7.97354 13.65 7.02197 13.0641 6.43604C12.4782 5.8501 11.5266 5.8501 10.9407 6.43604L3.44067 13.936V13.9407Z" fill="#564787" />
        </svg>

        <span> Pedidos Diponibles: </span>
        <span>{total}</span>
      </div>
    </section>
  );
};