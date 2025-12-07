import { useState, useEffect } from 'react'
import { HeaderHome } from '../components/home/Header'
import { MapConfirmMonitoring } from '../components/monitoring/MapConfirm'
import '../styles/ConfirmOrder.css'

export const ConfirmOrder = () => {

    const [firstView, setFirstView] = useState(true)
    const [count, setCount] = useState(2)

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(countInterval);
                    setFirstView(false);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(countInterval);
    }, [])


    return (
        <>
            <HeaderHome />
            {
                firstView ? <div className='card confirm-order'>
                    <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125 225C69.7656 225 25 180.234 25 125C25 69.7656 69.7656 25 125 25C180.234 25 225 69.7656 225 125C225 180.234 180.234 225 125 225ZM125 43.75C80.1172 43.75 43.75 80.1172 43.75 125C43.75 169.883 80.1172 206.25 125 206.25C169.883 206.25 206.25 169.883 206.25 125C206.25 80.1172 169.883 43.75 125 43.75ZM152.617 91.3672C155.664 87.1875 161.523 86.25 165.703 89.2969C169.883 92.3438 170.82 98.2031 167.773 102.383L120.078 168.008C118.477 170.234 115.977 171.641 113.242 171.836C110.508 172.031 107.812 171.055 105.898 169.141L84.0625 147.305C80.3906 143.633 80.3906 137.695 84.0625 134.063C87.7344 130.43 93.6719 130.391 97.3047 134.063L111.367 148.125L152.617 91.4062V91.3672Z" fill="#564787" />
                    </svg>

                    <span>Pedido confirmado...!</span>
                </div> :
                    <MapConfirmMonitoring />
            }
        </>
    )
}