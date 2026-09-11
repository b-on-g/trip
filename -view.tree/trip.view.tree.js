	($.$bog_trip) = class $bog_trip extends ($.$mol_view) {
		sub(){
			return [(this.Page())];
		}
		Page(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({
				"width": "768px", 
				"minHeight": "720px", 
				"flexDirection": "column"
			});
			(obj.sub) = () => ([
				(this.Title()), 
				(this.Dist()), 
				(this.Rate()), 
				(this.Price()), 
				(this.Fuel()), 
				(this.Cost()), 
				(this.Total()), 
				(this.Cell()), 
				(this.Plot()), 
				(this.Dest())
			]);
			return obj;
		}
		Title(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("Калькулятор поездки");
			return obj;
		}
		Dist(){
			const obj = new this.$.$mol_number();
			(obj.hint) = () => ("Расстояние, км");
			return obj;
		}
		Rate(){
			const obj = new this.$.$mol_number();
			(obj.hint) = () => ("Расход, л на км");
			return obj;
		}
		Price(){
			const obj = new this.$.$mol_number();
			(obj.hint) = () => ("Цена литра, ₽");
			return obj;
		}
		Fuel(){
			const obj = new this.$.$bog_vmap_part_calc();
			(obj.left) = () => ((this.dist_value()));
			(obj.right) = () => ((this.rate_value()));
			(obj.op) = (next) => ("mul");
			return obj;
		}
		Cost(){
			const obj = new this.$.$bog_vmap_part_calc();
			(obj.left) = () => ((this.fuel_result()));
			(obj.right) = () => ((this.price_value()));
			(obj.op) = (next) => ("mul");
			return obj;
		}
		Total(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.total()));
			return obj;
		}
		Cell(){
			const obj = new this.$.$bog_vmap_part_cell();
			(obj.code) = (next) => ("return ( 2.31 * 7.2 ).toFixed( 1 ) + \" кг CO2 на 100 км\"");
			return obj;
		}
		Plot(){
			const obj = new this.$.$bog_vmap_part_plot();
			(obj.title) = () => ("Расход по дням, л");
			(obj.values) = () => ((this.days()));
			return obj;
		}
		Dest(){
			const obj = new this.$.$bog_vmap_part_map();
			(obj.marker) = (next) => ("Пункт назначения");
			(obj.lat) = (next) => (55.75);
			(obj.lng) = (next) => (37.62);
			return obj;
		}
		dist_value(){
			return (this.Dist().value());
		}
		rate_value(){
			return (this.Rate().value());
		}
		fuel_result(){
			return (this.Fuel().result());
		}
		price_value(){
			return (this.Price().value());
		}
		total(){
			return null;
		}
		days(){
			return null;
		}
	};
	($mol_mem(($.$bog_trip.prototype), "Page"));
	($mol_mem(($.$bog_trip.prototype), "Title"));
	($mol_mem(($.$bog_trip.prototype), "Dist"));
	($mol_mem(($.$bog_trip.prototype), "Rate"));
	($mol_mem(($.$bog_trip.prototype), "Price"));
	($mol_mem(($.$bog_trip.prototype), "Fuel"));
	($mol_mem(($.$bog_trip.prototype), "Cost"));
	($mol_mem(($.$bog_trip.prototype), "Total"));
	($mol_mem(($.$bog_trip.prototype), "Cell"));
	($mol_mem(($.$bog_trip.prototype), "Plot"));
	($mol_mem(($.$bog_trip.prototype), "Dest"));

//# sourceMappingURL=trip.view.tree.js.map