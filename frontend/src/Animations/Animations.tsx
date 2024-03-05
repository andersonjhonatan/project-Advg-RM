import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Animations() {
  useEffect(() => {
    Aos.init();
  }, []);

}
