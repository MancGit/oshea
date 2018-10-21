export const search = {
  payload: {
    origin_city_id: "375dd5879001acbd84a4683ded9c875b",
    destination_city_id: "375dd5879001acbd84a4683deda84183",
    cities: [
      {
        id: "375dd5879001acbd84a4683deda84183",
        locale: "en",
        region_id: 6417,
        name: "New York",
        lat: 40.71427,
        lon: -74.00597,
        geohash: "dr5reg",
        timezone: "America/New_York",
        image_url: "/images/promos/city-blocks/new-york.jpg",
        legacy_url_form: "NewYork,NewYork,UnitedStates",
        full_name: "New York, New York, United States",
        region: {
          id: 6417,
          locale: "en",
          country_code2: "US",
          name: "New York",
          country: {
            code2: "US",
            locale: "en",
            code3: "USA",
            name: "United States",
            continent: "NA",
            default_locale: "en",
            default_currency: "USD",
            population: 310232863
          }
        }
      },
      {
        id: "375dd5879001acbd84a4683ded9c875b",
        locale: "en",
        region_id: 6417,
        name: "Montreal",
        lat: 40.71427,
        lon: -74.00597,
        geohash: "f25dvk",
        timezone: "America/New_York",
        image_url: "/images/promos/city-blocks/new-york.jpg",
        legacy_url_form: "NewYork,NewYork,UnitedStates",
        full_name: "Montreal, Quebec, Canada",
        region: {
          id: 6417,
          locale: "en",
          country_code2: "US",
          name: "Montreal",
          country: {
            code2: "CA",
            locale: "en",
            code3: "CA",
            name: "Canada",
            continent: "NA",
            default_locale: "en",
            default_currency: "CAD",
            population: 310232863
          }
        }
      }
    ],
    departures: [
      {
        amenities: {
          display_name: "",
          wifi: true,
          toilet: true,
          ac: true,
          refreshment: false,
          food: false,
          hot_meal: false,
          power_outlets: true,
          tv: false,
          bus_attendant: false,
          leg_room: false,
          small_seat: false,
          average_seat: true,
          xl_seat: false,
          full_recline_seat: false
        },
        arrival_timezone: "America/New_York",
        available_seats: 44,
        bus: null,
        busbud_departure_id: "434a5cbb",
        class: "Economy",
        class_name: "",
        fare_name: null,
        deeplink: null,
        departure_timezone: "America/Montreal",
        departure_type: null,
        destination_location_id: 36102,
        duration: 675,
        has_search_details: true,
        has_transfers: true,
        has_addons: null,
        id: "OWJmZjVlY2Y6OTEzZGIwNzI",
        links: {
          deeplink:
            "https://www.busbud.com/en/deeplink/f25dvk/dr5reg/OWJmZjVlY2Y6OTEzZGIwNzI?outbound_date=2018-10-19&return_date=2018-10-24&adults=1&children=0&seniors=0&child_ages=&senior_ages=&discount_code&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_medium={utm_medium}"
        },
        num_transfers: null,
        operator_id: "bfc27cd5-44ca-49c1-8d00-0f2bc00c58c0",
        origin_location_id: 1938,
        schedule_id: null,
        sellable: true,
        source_id: 155,
        ticket_types: ["print", "claim"],
        departure_time: "2018-10-19T23:45:00",
        arrival_time: "2018-10-20T11:00:00",
        fetched_at: "2018-09-23T23:05:08.930Z",
        prices: {
          currency: "CAD",
          total: 10321,
          categories: { adult: 10321, child: 10321, senior: 10321 },
          discount: 0,
          roundtrip_min: 20375,
          roundtrip_total: null,
          discounted: false,
          breakdown: { base: 10321, fees: 0, taxes: 0, discount: 0 }
        },
        trip_stops: null,
        addons: null,
        details: { num_transfers: 1 },
        terms: {
          type_of_id: "photo_and_full_name",
          ticket_requirements: {
            print: "printed_tkt",
            voucher: "printed_tkt",
            claim: "printed_tkt"
          },
          nb_carry_on: 1,
          kg_by_carry_on: 11,
          nb_checked_bags: 1,
          kg_by_bag: 23,
          checked_in_size_cm: null,
          extra_checked_in_fees: {
            type: "per_extra_checked_in",
            amount: 1500
          },
          oversized_luggage: {
            allowed: true,
            allowed_types: ["bicycle", "sport_equipment"],
            fees: { type: "as_additional_luggage", amount: null },
            early_arrival_required: true,
            cover_required: true
          },
          animals: {
            fees: { type: "unknown", amount: null, percent: null },
            main_compartment_allowed: false,
            hold_compartment_allowed: false,
            main_max_weight_kg: null,
            main_small_cage_required: null,
            hold_max_weight_kg: null,
            vaccination_required: true,
            special_animals_allowed: true,
            early_arrival_required: true,
            specific_hours: null
          },
          refund_policies: [
            {
              type: "no-refund",
              flat_fee: null,
              flat_fee_currency: null,
              percent_fee: null,
              cutoff_reference: "departure-date",
              cutoff_from: null,
              cutoff_to: null,
              external_link: null
            }
          ],
          refund: false,
          refund_cutoff: null,
          exchange_policies: [
            {
              type: "station",
              flat_fee: 2500,
              flat_fee_currency: "USD",
              percent_fee: null,
              cutoff_reference: "departure-date",
              cutoff_from: null,
              cutoff_to: 1,
              external_link: null
            }
          ],
          exchange: true,
          exchange_cutoff: 1,
          exchange_cutoff_at: "2018-10-20T02:45:00.000Z",
          currency: "USD",
          addons: {},
          piece_of_id: true,
          boarding_requirement: "printed_tkt",
          extra_bag_policy: true,
          extra_bag_cost: 1500,
          extra_bag_kg_cost: null,
          bag_allowed: true
        }
      },
      {
        amenities: {
          display_name: "",
          wifi: true,
          toilet: true,
          ac: true,
          refreshment: false,
          food: false,
          hot_meal: false,
          power_outlets: true,
          tv: false,
          bus_attendant: false,
          leg_room: false,
          small_seat: false,
          average_seat: true,
          xl_seat: false,
          full_recline_seat: false
        },
        arrival_timezone: "America/New_York",
        available_seats: 47,
        bus: null,
        busbud_departure_id: "e968e178",
        class: "Economy",
        class_name: "",
        fare_name: null,
        deeplink: null,
        departure_timezone: "America/Montreal",
        departure_type: null,
        destination_location_id: 46278,
        duration: 685,
        has_search_details: true,
        has_transfers: true,
        has_addons: null,
        id: "YTRiNmE1N2I6OTQ2ZGU2MTg",
        links: {
          deeplink:
            "https://www.busbud.com/en/deeplink/f25dvk/dr5reg/YTRiNmE1N2I6OTQ2ZGU2MTg?outbound_date=2018-10-19&return_date=2018-10-24&adults=1&children=0&seniors=0&child_ages=&senior_ages=&discount_code&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_medium={utm_medium}"
        },
        num_transfers: null,
        operator_id: "bfc27cd5-44ca-49c1-8d00-0f2bc00c58c0",
        origin_location_id: 1938,
        schedule_id: null,
        sellable: true,
        source_id: 155,
        ticket_types: ["print", "claim"],
        departure_time: "2018-10-19T11:15:00",
        arrival_time: "2018-10-19T22:40:00",
        fetched_at: "2018-09-23T23:05:08.625Z",
        prices: {
          currency: "CAD",
          total: 10000,
          categories: { adult: 10321, child: 10321, senior: 10321 },
          discount: 0,
          roundtrip_min: 20375,
          roundtrip_total: null,
          discounted: false,
          breakdown: { base: 10321, fees: 0, taxes: 0, discount: 0 }
        },
        trip_stops: null,
        addons: null,
        details: { num_transfers: 1 },
        terms: {
          type_of_id: "photo_and_full_name",
          ticket_requirements: {
            print: "printed_tkt",
            voucher: "printed_tkt",
            claim: "printed_tkt"
          },
          nb_carry_on: 1,
          kg_by_carry_on: 11,
          nb_checked_bags: 1,
          kg_by_bag: 23,
          checked_in_size_cm: null,
          extra_checked_in_fees: {
            type: "per_extra_checked_in",
            amount: 1500
          },
          oversized_luggage: {
            allowed: true,
            allowed_types: ["bicycle", "sport_equipment"],
            fees: { type: "as_additional_luggage", amount: null },
            early_arrival_required: true,
            cover_required: true
          },
          animals: {
            fees: { type: "unknown", amount: null, percent: null },
            main_compartment_allowed: false,
            hold_compartment_allowed: false,
            main_max_weight_kg: null,
            main_small_cage_required: null,
            hold_max_weight_kg: null,
            vaccination_required: true,
            special_animals_allowed: true,
            early_arrival_required: true,
            specific_hours: null
          },
          refund_policies: [
            {
              type: "no-refund",
              flat_fee: null,
              flat_fee_currency: null,
              percent_fee: null,
              cutoff_reference: "departure-date",
              cutoff_from: null,
              cutoff_to: null,
              external_link: null
            }
          ],
          refund: false,
          refund_cutoff: null,
          exchange_policies: [
            {
              type: "station",
              flat_fee: 2500,
              flat_fee_currency: "USD",
              percent_fee: null,
              cutoff_reference: "departure-date",
              cutoff_from: null,
              cutoff_to: 1,
              external_link: null
            }
          ],
          exchange: true,
          exchange_cutoff: 1,
          exchange_cutoff_at: "2018-10-19T14:15:00.000Z",
          currency: "USD",
          addons: {},
          piece_of_id: true,
          boarding_requirement: "printed_tkt",
          extra_bag_policy: true,
          extra_bag_cost: 1500,
          extra_bag_kg_cost: null,
          bag_allowed: true
        }
      },
      {
        amenities: {
          display_name: "",
          wifi: true,
          toilet: true,
          ac: true,
          refreshment: false,
          food: false,
          hot_meal: false,
          power_outlets: true,
          tv: false,
          bus_attendant: false,
          leg_room: false,
          small_seat: false,
          average_seat: true,
          xl_seat: false,
          full_recline_seat: false
        },
        arrival_timezone: "America/New_York",
        available_seats: 45,
        bus: null,
        busbud_departure_id: "cd8fe59e",
        class: "Economy",
        class_name: "",
        fare_name: null,
        deeplink: null,
        departure_timezone: "America/Montreal",
        departure_type: null,
        destination_location_id: 46278,
        duration: 560,
        has_search_details: true,
        has_transfers: true,
        has_addons: null,
        id: "ZDIxNDMwZGI6ZjQyOWVlM2U",
        links: {
          deeplink:
            "https://www.busbud.com/en/deeplink/f25dvk/dr5reg/ZDIxNDMwZGI6ZjQyOWVlM2U?outbound_date=2018-10-19&return_date=2018-10-24&adults=1&children=0&seniors=0&child_ages=&senior_ages=&discount_code&utm_source={utm_source}&utm_campaign={utm_campaign}&utm_medium={utm_medium}"
        },
        num_transfers: null,
        operator_id: "bfc27cd5-44ca-49c1-8d00-0f2bc00c58c0",
        origin_location_id: 1938,
        schedule_id: null,
        sellable: true,
        source_id: 155,
        ticket_types: ["print", "claim"],
        departure_time: "2018-10-19T21:45:00",
        arrival_time: "2018-10-20T09:05:00",
        fetched_at: "2018-09-23T23:05:08.625Z",
        prices: {
          currency: "CAD",
          total: 5000,
          categories: { adult: 10321, child: 10321, senior: 10321 },
          discount: 0,
          roundtrip_min: 20375,
          roundtrip_total: null,
          discounted: false,
          breakdown: { base: 10321, fees: 0, taxes: 0, discount: 0 }
        },
        trip_stops: null,
        addons: null,
        details: { num_transfers: 1 },
        terms: {
          type_of_id: "photo_and_full_name",
          ticket_requirements: {
            print: "printed_tkt",
            voucher: "printed_tkt",
            claim: "printed_tkt"
          },
          nb_carry_on: 1,
          kg_by_carry_on: 11,
          nb_checked_bags: 1,
          kg_by_bag: 23,
          checked_in_size_cm: null,
          extra_checked_in_fees: {
            type: "per_extra_checked_in",
            amount: 1500
          },
          oversized_luggage: {
            allowed: true,
            allowed_types: ["bicycle", "sport_equipment"],
            fees: { type: "as_additional_luggage", amount: null },
            early_arrival_required: true,
            cover_required: true
          },
          animals: {
            fees: { type: "unknown", amount: null, percent: null },
            main_compartment_allowed: false,
            hold_compartment_allowed: false,
            main_max_weight_kg: null,
            main_small_cage_required: null,
            hold_max_weight_kg: null,
            vaccination_required: true,
            special_animals_allowed: true,
            early_arrival_required: true,
            specific_hours: null
          },
          refund_policies: [
            {
              type: "no-refund",
              flat_fee: null,
              flat_fee_currency: null,
              percent_fee: null,
              cutoff_reference: "departure-date",
              cutoff_from: null,
              cutoff_to: null,
              external_link: null
            }
          ],
          refund: false,
          refund_cutoff: null,
          exchange_policies: [
            {
              type: "station",
              flat_fee: 2500,
              flat_fee_currency: "USD",
              percent_fee: null,
              cutoff_reference: "departure-date",
              cutoff_from: null,
              cutoff_to: 1,
              external_link: null
            }
          ],
          exchange: true,
          exchange_cutoff: 1,
          exchange_cutoff_at: "2018-10-20T02:45:00.000Z",
          currency: "USD",
          addons: {},
          piece_of_id: true,
          boarding_requirement: "printed_tkt",
          extra_bag_policy: true,
          extra_bag_cost: 1500,
          extra_bag_kg_cost: null,
          bag_allowed: true
        }
      }
    ],
    locations: [
      {
        id: 1938,
        city_id: "375dd587-9001-acbd-84a4-683dedfb933e",
        name: "Gare d'autocars de Montréal",
        address: ["1717 Rue Berri", "Montréal, QC H2L 4E9", "Canada"],
        type: "bus_station",
        lat: 45.516235,
        lon: -73.562668,
        geohash: "f25dyjcr3"
      },
      {
        id: 1942,
        city_id: "375dd587-9001-acbd-84a4-683deda84183",
        name: "Port Authority Bus Terminal",
        address: ["619-623 8th Ave", "New York, NY 10018", "USA"],
        type: "bus_station",
        lat: 40.756252,
        lon: -73.990684,
        geohash: "dr5ru73wk"
      },
      {
        id: 36102,
        city_id: "375dd587-9001-acbd-84a4-683deda84183",
        name: "George Washington Bridge",
        address: ["4211 Broadway", "New York", "NY 10033", "USA"],
        type: "bus_stop",
        lat: 40.848852,
        lon: -73.938404,
        geohash: "dr72mkr9y"
      },
      {
        id: 46278,
        city_id: "375dd587-9001-acbd-84a4-683deda84183",
        name: "Brooklyn Downtown Hoyt & Livingston",
        address: ["206 Livingston St", "Brooklyn", "NY 11201, USA"],
        type: "bus_stop",
        lat: 40.6895934,
        lon: -73.9859891,
        geohash: "dr5rkrm41"
      }
    ],
    operators: [
      {
        id: "bfc27cd5-44ca-49c1-8d00-0f2bc00c58c0",
        source_id: 155,
        profile_id: 580,
        name: "Greyhound",
        url: null,
        logo_url:
          "https://busbud.imgix.net/operator-logos/logo_greyhound-og.png.png?h={height}&w={width}&auto=format&fit=fill&bg=0FFF",
        display_name: "Greyhound",
        review_state: "good",
        sellable: true,
        fuzzy_prices: false,
        sell_tickets_cutoff: { minutes: 45 },
        amenities: {
          classes: {
            Normal: {
              display_name: "",
              wifi: true,
              toilet: true,
              ac: true,
              refreshment: false,
              food: false,
              hot_meal: false,
              power_outlets: true,
              tv: false,
              bus_attendant: false,
              leg_room: false,
              small_seat: false,
              average_seat: true,
              xl_seat: false,
              full_recline_seat: false
            },
            Economy: {
              display_name: "",
              wifi: true,
              toilet: true,
              ac: true,
              refreshment: false,
              food: false,
              hot_meal: false,
              power_outlets: true,
              tv: false,
              bus_attendant: false,
              leg_room: false,
              small_seat: false,
              average_seat: true,
              xl_seat: false,
              full_recline_seat: false
            }
          }
        },
        source: "greyhound_us",
        referral_deal: false,
        display_url: null,
        fraud_check: "iovation"
      }
    ],
    complete: false,
    ttl: 599
  }
};
