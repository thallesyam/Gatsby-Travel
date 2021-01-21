import React from 'react'

import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'

export const StatsData = [
  {
    icon: (<GiEarthAmerica css={` color: #04fbf1;`} />),
    title: "Mais de 100 Destinos",
    desc: "Viaje para mais de 100 lugares únicos"
  },
  {
    icon: (<MdAirplanemodeActive css={` color: #f3a82e;`} />),
    title: "1 milhão de viagens feitas",
    desc: "Mais de 1 milhão de viagens compelas no ultimo ano"
  },
  {
    icon: (<MdTimer css={` color: #f34f2e;`} />),
    title: "O suporte mais rápido",
    desc: "Equipe de suporte 24 horas disponivel"
  },
  {
    icon: (<FaMoneyCheck css={` color: #3af576;`} />),
    title: "Melhor negocio",
    desc: "Oferecemos os melhores preços"
  },
]