function power(allTurbine, p1, p2, p3) {
  for (let turbineCounter = 1, sumPower = 2000; turbineCounter <= allTurbine; turbineCounter++) {
    if (turbineCounter == 1) {
      console.log('A(z) ' + turbineCounter + '.számú szélturbina teljes fordulaton működik, ' + p1 + ' MWh-t termelve.A farmon termelt összenergia jelenleg ' + sumPower + ' MWh.')
    } else if (turbineCounter <= 10) {
      console.log('A(z) ' + turbineCounter + '.számú szélturbina teljes fordulaton működik, ' + p1 + ' MWh-t termelve.A farmon termelt összenergia jelenleg ' + (sumPower = sumPower + p1) + ' MWh.')
    } else if (turbineCounter <= 15) {
      console.log('A(z) ' + turbineCounter + '.számú szélturbina fél fordulaton működik, ' + p2 + ' MWh-t termelve.A farmon termelt összenergia jelenleg ' + (sumPower = sumPower + p2) + ' MWh.')
    } else if (turbineCounter <= 20) {
      console.log('A(z) ' + turbineCounter + '. számú szélturbina nem működik, ' + p3 + ' MWh-t termelve. A farmon termelt összenergia jelenleg ' + sumPower + ' MWh.')
    }
  }
}
power(20, 2000, 1000, 0)