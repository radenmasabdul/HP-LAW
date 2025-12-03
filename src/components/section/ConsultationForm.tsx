import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next";
import {
    Alert,
    AlertTitle,
    AlertDescription
} from "@/common/componentShadcn/ui/alert"
import { Button } from "@/common/componentShadcn/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
 } from "@/common/componentShadcn/ui/card"
import { Input } from "@/common/componentShadcn/ui/input"
import { Label } from "@/common/componentShadcn/ui/label"
import { Spinner } from "@/common/componentShadcn/ui/spinner"
import { Textarea } from "@/common/componentShadcn/ui/textarea"

import image from "@/assets/image-02.jpg"

type AlertType = "success" | "error" | "info"

interface AlertMessage {
    type: AlertType
    message: string
}

export default function ConsultationForm() {
    const { t } = useTranslation();

    const labelClass = `text-white text-sm font-light fonts-inter`
    const inputClass = `rounded-none bg-transparent border-grey-deep text-white placeholder:text-grey-deep`

    const [alert, setAlert] = useState<AlertMessage | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setAlert({ type: "info", message: "Sending..." })

        const formElement = event.currentTarget
        const web3formData = new FormData(formElement)
        web3formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY)
        web3formData.append("subject", "New Consultation Request from Website")
        web3formData.append("from_name", "Consultation Form")
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: web3formData
            })

            const data = await response.json()
            if (data.success) {
                setAlert({ type: "success", message: "Form Submitted Successfully" })
                formElement.reset()
            } else {
                setAlert({ type: "error", message: "Error submitting form" })
            }
        } catch (error) {
            setAlert({ type: "error", message: "Error submitting form" })
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!alert) return
        const timer = setTimeout(() => setAlert(null), 5000)
        return () => clearTimeout(timer)
    }, [alert])

  return (
    <main className="bg-black-deep">
      <section className="flex flex-col px-4 md:px-20 py-6 md:py-10 gap-2 md:gap-4">
        <Card className="bg-black-medium border-black-medium rounded-none py-0!">
          <div className="flex flex-col md:flex-row gap-0">
            <div className="md:w-1/2">
              <img 
                src={image}
                alt="Professional team consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/2 py-8 px-6 md:py-16 md:px-12 bg-black-medium">
                <CardHeader className="p-0 mb-4 md:mb-8">
                    <CardTitle className="text-2xl md:text-4xl text-gold-medium font-semibold fonts-inter">{t("section_consultation_form.title")}</CardTitle>
                </CardHeader>
                
                {alert && (
                    <Alert 
                        className={`mb-4 cursor-pointer transition-all duration-300 hover:translate-x-2
                            ${alert.type === "success" ? "bg-green-500/20 border-green-500 text-green-600" : ""}
                            ${alert.type === "error" ? "bg-red-500/20 border-red-500 text-red-600" : ""}
                            ${alert.type === "info" ? "bg-blue-500/20 border-blue-500 text-blue-600" : ""}
                        `} 
                        onClick={() => setAlert(null)}
                    >
                        <AlertTitle className="font-semibold">
                            {alert.type === "success" ? t("section_consultation_form.alert.success") : alert.type === "error" ? t("section_consultation_form.alert.error") : t("section_consultation_form.alert.info")}
                        </AlertTitle>
                        <AlertDescription>{alert.message}</AlertDescription>
                    </Alert>
                )}

                <CardContent className="p-0">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="firstName" className={labelClass}>{t("section_consultation_form.form.first_name")}</Label>
                                    <Input id="firstName" name="firstName" placeholder="First Name" required className={inputClass}/>
                                </div>

                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="lastName" className={labelClass}>{t("section_consultation_form.form.last_name")}</Label>
                                    <Input id="lastName" name="lastName" placeholder="Last Name" required className={inputClass}/>
                                </div>
                            </div>
                        
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="email" className={labelClass}>{t("section_consultation_form.form.email")}</Label>
                                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="example@gmail.com" required className={inputClass}/>
                                </div>
                            
                                <div className="flex flex-col gap-2 flex-1">
                                    <Label htmlFor="phone" className={labelClass}>{t("section_consultation_form.form.phone")}</Label>
                                    <Input id="phone" name="phone" type="tel" autoComplete="phone" placeholder="Phone" required className={inputClass} maxLength={18}/>
                                </div>
                            </div>
                        
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="message" className={labelClass}>{t("section_consultation_form.form.message")}</Label>
                                <Textarea id="message" name="message" placeholder="Please type your message here..." required className={inputClass}/>
                            </div>
                  
                            <div className="pt-2">
                                <Button type="submit" disabled={isLoading}
                                    className="bg-gold-medium hover:bg-gold-medium text-sm text-black-deep font-semibold rounded-none fonrs-inter"
                                >
                                    {isLoading && <Spinner className="w-4 h-4"/>}
                                    {isLoading ? t("section_consultation_form.form.submit_processing") : t("section_consultation_form.form.submit")}
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </div>
          </div>
        </Card>
      </section>
    </main>
 )
}