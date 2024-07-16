import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    MoreVertical,
    Truck,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { CountryStats } from "@/lib/types"
import { colors } from "@/lib/colors"


  export default function Country() {

    const [stats, setStats] = useState<CountryStats>({
        "gdp": 47146,
        "sex_ratio": 99.7,
        "surface_area": 2344858,
        "life_expectancy_male": 58.7,
        "unemployment": 4.2,
        "imports": 5159,
        "currency": {
          "code": "CDF",
          "name": "Congolese Franc"
        },
        "iso2": "CD",
        "employment_services": 25.1,
        "employment_industry": 9.8,
        "urban_population_growth": 4.6,
        "secondary_school_enrollment_female": 36,
        "employment_agriculture": 65.1,
        "capital": "Kinshasa",
        "co2_emissions": 2.2,
        "forested_area": 67.3,
        "tourists": 351,
        "exports": 3477,
        "life_expectancy_female": 61.7,
        "post_secondary_enrollment_female": 4.7,
        "post_secondary_enrollment_male": 8.5,
        "primary_school_enrollment_female": 107.6,
        "infant_mortality": 64.9,
        "gdp_growth": 5.8,
        "threatened_species": 497,
        "population": 89561,
        "urban_population": 45,
        "secondary_school_enrollment_male": 56.3,
        "name": "Congo, The Democratic Republic Of The",
        "pop_growth": 3.2,
        "region": "Middle Africa",
        "pop_density": 39.5,
        "internet_users": 8.6,
        "gdp_per_capita": 560.8,
        "fertility": 6,
        "refugees": 5057.8,
        "primary_school_enrollment_male": 108.4
    })

    return (
      <Card className="overflow-hidden w-full">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className={`group flex items-center gap-2 text-lg text-[#0085CA]`}>
              {stats.name}              
            </CardTitle>
            <CardDescription>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{stats.region}</span>
                    <span>&middot;</span>
                    <span>{stats.iso2}</span>
                </div>                
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Key Statistics</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                Population
                </span>
                <span>{stats.population}K</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                Capital
                </span>
                <span>{stats.capital}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                GDP (USD)
                </span>
                <span>{stats.gdp}M</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                GDP Growth
                </span>
                <span>{stats.gdp_growth}%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                GDP per Capita
                </span>
                <span>${stats.gdp_per_capita}</span>
              </li>
            </ul>
            <Separator className="my-2" />
            <div className="font-semibold">Economic Indicators</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Unemployment Rate</span>
                <span>{stats.unemployment}%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Exports (USD)</span>
                <span>{stats.exports}M</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Imports (USD)</span>
                <span>{stats.imports}M</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Currency</span>
                <span>{stats.currency.code}</span>
              </li>
            </ul>
            <Separator className="my-2" />
            <div className="font-semibold">Demographics and Health</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Life Expectancy(F/M)</span>
                <span>{stats.life_expectancy_female}/{stats.life_expectancy_male}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Infant Mortality</span>
                <span>{stats.exports} per 1000</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Fertility Rate</span>
                <span>{stats.fertility} children per woman</span>
              </li>
            </ul>
            <Separator className="my-2" />
            <div className="font-semibold">Education and Internet Use</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Primary School Enrollment(F/M)</span>
                <span>{stats.primary_school_enrollment_female}/{stats.primary_school_enrollment_male}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Secondary School Enrollment(F/M)</span>
                <span>{stats.secondary_school_enrollment_female}/{stats.secondary_school_enrollment_male}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Internet Users</span>
                <span>{stats.internet_users}%</span>
              </li>
            </ul>
            <Separator className="my-2" />
            <div className="font-semibold">Environmental and Additional Data</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Forest Area</span>
                <span>{stats.forested_area}% of land area</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">CO2 Emissions</span>
                <span>{stats.co2_emissions} metric tons per capita</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Endangered Species</span>
                <span>{stats.threatened_species}</span>
              </li>
            </ul>
          </div>
          
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>          
        </CardFooter>
      </Card>
    )
  }
  