"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Edit, Plus, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AccountSidebar from "@/components/account-sidebar"

// Mock address data
const addresses = [
  {
    id: 1,
    type: "Shipping",
    default: true,
    name: "John Doe",
    street: "123 Main Street",
    apt: "Apt 4B",
    city: "Lagos",
    state: "Lagos State",
    zip: "100001",
    country: "Nigeria",
    phone: "+234 801 234 5678",
  },
  {
    id: 2,
    type: "Billing",
    default: true,
    name: "John Doe",
    street: "123 Main Street",
    apt: "Apt 4B",
    city: "Lagos",
    state: "Lagos State",
    zip: "100001",
    country: "Nigeria",
    phone: "+234 801 234 5678",
  },
]

export default function AddressesPage() {
  const [addressList, setAddressList] = useState(addresses)
  const [isEditing, setIsEditing] = useState(false)
  const [currentAddress, setCurrentAddress] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()

  const handleEdit = (address) => {
    setCurrentAddress(address)
    setIsEditing(true)
  }

  const handleAdd = () => {
    setCurrentAddress({
      id: Date.now(),
      type: "Shipping",
      default: false,
      name: "",
      street: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
      country: "Nigeria",
      phone: "",
    })
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    setIsDeleting(true)

    // Simulate deletion
    setTimeout(() => {
      setAddressList(addressList.filter((address) => address.id !== id))
      setIsDeleting(false)
      toast({
        title: "Address deleted",
        description: "The address has been removed from your account.",
      })
    }, 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      if (addressList.find((addr) => addr.id === currentAddress.id)) {
        // Update existing address
        setAddressList(addressList.map((addr) => (addr.id === currentAddress.id ? currentAddress : addr)))
        toast({
          title: "Address updated",
          description: "Your address has been updated successfully.",
        })
      } else {
        // Add new address
        setAddressList([...addressList, currentAddress])
        toast({
          title: "Address added",
          description: "Your new address has been added successfully.",
        })
      }

      setIsSubmitting(false)
      setIsEditing(false)
    }, 1500)
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <AccountSidebar />

        <div className="flex-1">
          <div className="mb-8">
            <Link href="/account" className="flex items-center text-sm mb-4 text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Manage Addresses</h1>
                <p className="text-muted-foreground">Add and edit your shipping and billing addresses</p>
              </div>
              <Button onClick={handleAdd} className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                Add Address
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {addressList.map((address) => (
              <Card key={address.id}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{address.type} Address</CardTitle>
                    {address.default && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                  </div>
                  <CardDescription>Used for {address.type.toLowerCase()} purposes</CardDescription>
                </CardHeader>
                <CardContent>
                  <address className="not-italic space-y-1">
                    <p className="font-medium">{address.name}</p>
                    <p>{address.street}</p>
                    {address.apt && <p>{address.apt}</p>}
                    <p>
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <p>{address.country}</p>
                    <p>{address.phone}</p>
                  </address>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(address)} className="flex items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="flex items-center">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Address</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this address? This action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => {}}>
                          Cancel
                        </Button>
                        <Button variant="destructive" onClick={() => handleDelete(address.id)} disabled={isDeleting}>
                          {isDeleting ? "Deleting..." : "Delete"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Edit/Add Address Dialog */}
          {currentAddress && (
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>
                    {addressList.find((addr) => addr.id === currentAddress.id) ? "Edit" : "Add"} Address
                  </DialogTitle>
                  <DialogDescription>
                    {addressList.find((addr) => addr.id === currentAddress.id)
                      ? "Update your address information below."
                      : "Fill in the details for your new address."}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="addressType">Address Type</Label>
                        <Select
                          defaultValue={currentAddress.type}
                          onValueChange={(value) => setCurrentAddress({ ...currentAddress, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Shipping">Shipping</SelectItem>
                            <SelectItem value="Billing">Billing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end space-x-2">
                        <input
                          type="checkbox"
                          id="defaultAddress"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          checked={currentAddress.default}
                          onChange={(e) => setCurrentAddress({ ...currentAddress, default: e.target.checked })}
                        />
                        <Label htmlFor="defaultAddress" className="font-normal">
                          Set as default
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={currentAddress.name}
                        onChange={(e) => setCurrentAddress({ ...currentAddress, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="street">Street Address</Label>
                      <Input
                        id="street"
                        value={currentAddress.street}
                        onChange={(e) => setCurrentAddress({ ...currentAddress, street: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="apt">Apartment, suite, etc. (optional)</Label>
                      <Input
                        id="apt"
                        value={currentAddress.apt}
                        onChange={(e) => setCurrentAddress({ ...currentAddress, apt: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={currentAddress.city}
                          onChange={(e) => setCurrentAddress({ ...currentAddress, city: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={currentAddress.state}
                          onChange={(e) => setCurrentAddress({ ...currentAddress, state: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          value={currentAddress.zip}
                          onChange={(e) => setCurrentAddress({ ...currentAddress, zip: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={currentAddress.country}
                          onChange={(e) => setCurrentAddress({ ...currentAddress, country: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={currentAddress.phone}
                        onChange={(e) => setCurrentAddress({ ...currentAddress, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Saving..." : "Save Address"}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  )
}
