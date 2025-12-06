import { shippingFormSchema, ShippingFormInputs } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  })
  const router = useRouter()
  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push('/cart?step=3', { scroll: false })
  }
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-medium text-gray-500">
          Name
        </label>
        <input
          className='"border-b border-gray-200 py-2 outline-none text-sm"'
          type="text"
          id="name"
          placeholder="john doe"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
        <label htmlFor="email">Name</label>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-medium text-gray-500">
          Email
        </label>
        <input
          className='"border-b border-gray-200 py-2 outline-none text-sm"'
          type="email"
          id="email"
          placeholder="johndoe@example.comem"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs font-medium text-gray-500">
          Phone
        </label>
        <input
          className='"border-b border-gray-200 py-2 outline-none text-sm"'
          type="number"
          id="phone"
          placeholder="+1 234 567 890"
          {...register('phone')}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs font-medium text-gray-500">
          Address
        </label>
        <input
          className='"border-b border-gray-200 py-2 outline-none text-sm"'
          type="text"
          id="address"
          placeholder="123, Main St, City, Country"
          {...register('address')}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs font-medium text-gray-500">
          City
        </label>
        <input
          className='"border-b border-gray-200 py-2 outline-none text-sm"'
          type="text"
          id="city"
          placeholder="john doe"
          {...register('city')}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-gray-800 p-2 text-sm font-medium text-white hover:bg-gray-900
        transition-all duration-300 cursor-pointer flex justify-center items-center mt-4"
      >
        Continue
        <ArrowRight className=" h-3 w-3" />
      </button>
    </form>
  )
}

export default ShippingForm
