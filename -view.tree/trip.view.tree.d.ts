declare namespace $ {

	type $mol_view__style_bog_trip_1 = $mol_type_enforce<
		({ 
			'width': string,
			'minHeight': string,
			'flexDirection': string,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub_bog_trip_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_bog_trip_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_number__hint_bog_trip_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__hint_bog_trip_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $mol_number__hint_bog_trip_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_number['hint'] >
	>
	type $bog_vmap_part_calc__left_bog_trip_7 = $mol_type_enforce<
		ReturnType< $bog_trip['dist_value'] >
		,
		ReturnType< $bog_vmap_part_calc['left'] >
	>
	type $bog_vmap_part_calc__right_bog_trip_8 = $mol_type_enforce<
		ReturnType< $bog_trip['rate_value'] >
		,
		ReturnType< $bog_vmap_part_calc['right'] >
	>
	type $bog_vmap_part_calc__op_bog_trip_9 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_vmap_part_calc['op'] >
	>
	type $bog_vmap_part_calc__left_bog_trip_10 = $mol_type_enforce<
		ReturnType< $bog_trip['fuel_result'] >
		,
		ReturnType< $bog_vmap_part_calc['left'] >
	>
	type $bog_vmap_part_calc__right_bog_trip_11 = $mol_type_enforce<
		ReturnType< $bog_trip['price_value'] >
		,
		ReturnType< $bog_vmap_part_calc['right'] >
	>
	type $bog_vmap_part_calc__op_bog_trip_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_vmap_part_calc['op'] >
	>
	type $mol_paragraph__title_bog_trip_13 = $mol_type_enforce<
		ReturnType< $bog_trip['total'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $bog_vmap_part_cell__code_bog_trip_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_vmap_part_cell['code'] >
	>
	type $bog_vmap_part_plot__title_bog_trip_15 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_vmap_part_plot['title'] >
	>
	type $bog_vmap_part_plot__values_bog_trip_16 = $mol_type_enforce<
		ReturnType< $bog_trip['days'] >
		,
		ReturnType< $bog_vmap_part_plot['values'] >
	>
	type $bog_vmap_part_map__marker_bog_trip_17 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_vmap_part_map['marker'] >
	>
	type $bog_vmap_part_map__lat_bog_trip_18 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_vmap_part_map['lat'] >
	>
	type $bog_vmap_part_map__lng_bog_trip_19 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_vmap_part_map['lng'] >
	>
	export class $bog_trip extends $mol_view {
		sub( ): readonly(any)[]
		Page( ): $mol_view
		Title( ): $mol_paragraph
		Dist( ): $mol_number
		Rate( ): $mol_number
		Price( ): $mol_number
		Fuel( ): $bog_vmap_part_calc
		Cost( ): $bog_vmap_part_calc
		Total( ): $mol_paragraph
		Cell( ): $bog_vmap_part_cell
		Plot( ): $bog_vmap_part_plot
		Dest( ): $bog_vmap_part_map
		dist_value( ): ReturnType< ReturnType< $bog_trip['Dist'] >['value'] >
		rate_value( ): ReturnType< ReturnType< $bog_trip['Rate'] >['value'] >
		fuel_result( ): ReturnType< ReturnType< $bog_trip['Fuel'] >['result'] >
		price_value( ): ReturnType< ReturnType< $bog_trip['Price'] >['value'] >
		total( ): any
		days( ): any
	}
	
}

//# sourceMappingURL=trip.view.tree.d.ts.map