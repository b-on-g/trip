namespace $.$$ {

	export class $bog_trip extends $.$bog_trip {

		total() {
		  const cost = this.Cost().result()
		  if( !Number.isFinite( cost ) ) return "Заполни три поля — посчитаю стоимость"
		  return "Поездка обойдётся в " + Math.round( cost ) + " ₽"
		}

		days() {
		  const fuel = this.Fuel().result()
		  const whole = Number.isFinite( fuel ) ? fuel : 0
		  const out = []
		  for( let day = 1; day <= 5; day += 1 ) out.push( Math.round( whole * day * 2 ) / 10 )
		  return out
		}

	}

}
