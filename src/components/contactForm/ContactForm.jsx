import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    Swal.fire({
      title: "Success!",
      text: "Your form has been submitted successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      setSubmitted(true); // hide form and show success block
    });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center p-6 bg-green-100 rounded">
        <h2 className="text-2xl font-bold text-green-700">Thank you!</h2>
        <p className="mt-2 text-green-600">
          Your submission has been received. We’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block">Fullname</label>
          <input
            {...register("fullname", { required: "Fullname is required" })}
            className="border p-2 w-full"
          />
          {errors.fullname && (
            <p className="text-red-500">{errors.fullname.message}</p>
          )}
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="border p-2 w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block">Phone</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[0-9+\- ]+$/,
                message: "Invalid phone number",
              },
            })}
            className="border p-2 w-full"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block">Company Name</label>
          <input
            {...register("companyName", {
              required: "Company name is required",
            })}
            className="border p-2 w-full"
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName.message}</p>
          )}
        </div>

        <div>
          <label className="block">Profile</label>
          <select
            {...register("profile", { required: "Profile is required" })}
            className="border p-2 w-full"
          >
            <option value="">Select profile</option>
            <option value="student">Student</option>
            <option value="freelancer">Freelancer</option>
          </select>
          {errors.profile && (
            <p className="text-red-500">{errors.profile.message}</p>
          )}
        </div>

        <div>
          <label className="block">Position</label>
          <select
            {...register("position", { required: "Position is required" })}
            className="border p-2 w-full"
          >
            <option value="">Select position</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
          {errors.position && (
            <p className="text-red-500">{errors.position.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="border p-2 w-full"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          {...register("privacy", {
            required: "You must accept the privacy policy",
          })}
          className="mr-2"
        />
        <label>I accept the privacy policy</label>
      </div>
      {errors.privacy && (
        <p className="text-red-500">{errors.privacy.message}</p>
      )}

      <button
        type="submit"
        className="bg-gray-500 px-4 py-2 hover:bg-gray-600 hover:cursor-pointer text-white"
      >
        Submit
      </button>
    </form>
  );
}
