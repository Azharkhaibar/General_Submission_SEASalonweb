import '../../sass/reservation.scss';
import React from 'react';
import { Navbar } from './home';
import { ReservationForm } from './reservationnew';

import { BannerReservation } from '../../layout/bannerlayout';

export class Reservation extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <BannerReservation />
                <ReservationForm />
            </div>
        )
    }
}