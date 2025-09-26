"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const business_setup: { title: string; href: string;  }[] = [
  {
    title: "Private Limited Company Registration",
    href: "#"
  },
  {
    title: "Limited Liability Partnership (LLP) Registration",
    href: "#"
  },
  {
    title: "One Person Company (OPC) Registration",
    href: "#"
  },
  {
    title: "Sole Proprietorship Registration",
    href: "#"
  },
  {
    title: "Partnership Firm Registration",
    href: "#"
  },
  {
    title: "Section 8 Company Registration",
    href: "#"
  },
  {
    title: "Firm Conversion (Proprietorship to Pvt Ltd)",
    href: "#"
  },
  {
    title: "Startup India Registration",
    href: "#"
  },
]

const license_Permits = [
  {
    title: "FSSAI Food License",
    href: "#"
  },
]

const NAV = [
  {
    name: "Business Setup",
    items: [
      "Private Limited Company Registration",
      "Limited Liability Partnership (LLP) Registration",
      "One Person Company (OPC) Registration",
      "Sole Proprietorship Registration",
      "Partnership Firm Registration",
      "Section 8 Company Registration",
      "Firm Conversion (Proprietorship to Pvt Ltd)",
      "Startup India Registration",
    ],
  },
  { name: "Licenses & Permits", items: ["FSSAI Food License"] },
  { name: "GST & Taxation", items: ["GST Registration", "GST Return Filing"] },
  { name: "Income Tax & TDS", items: ["Income Tax Return (ITR) Filing for Individuals", "TDS Return Filing", "Tax Audit"] },
  { name: "Company Compliance", items: ["Annual Compliance (Pvt Ltd/LLP/OPC)"] },
  { name: "Accounting & Finance", items: ["Accounting & Bookkeeping (Monthly/Annual)", "Virtual CFO Services", "Viirtual Accounting Service"] },
  { name: "Trademark & IP", items: ["Trademark Registration"] },
];

export function Megamenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
              {NAV.map((component, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuTrigger>{component.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              {component.items.map((item, ind) => (
                <ListItem
                  key={ind}
                  title={item}
                  href={item}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
              ))}

      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="sum_menu_title">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
