import { FiArrowRight } from "react-icons/fi"
import { IoAccessibility } from "react-icons/io5"
import { SubCard } from "../subCard"
export const products = ()=>{
    return (
    <div className="grid gap-4 lg:h-2xl w-2xl p-2 md:grid-cols-2">
      <SubCard
      className="w-full h-20"
      iconImage={<IoAccessibility />}
      title="User Management"
      subtitle="Complete auth & user management platform"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Enterprise SSO"
      subtitle="Unified SSO integration for any identity provider"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Radar"
      subtitle="Real-time protection against bots, fraud, and abuse"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Admin Portal"
      subtitle="Self-serve onboarding for corporate IT admins"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Directory Sync"
      subtitle="User lifecycle management from corporate directories"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Fine-Grained Authorization"
      subtitle="The most flexible and granular authorization system"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="AuthKit"
      subtitle="Customizable UI for all authentication types"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Audit Logs"
      subtitle="Advanced event logging, exporting, and streaming"
      />
      <SubCard
      className="w-full h-20"
      iconImage={<FiArrowRight />}
      title="Vault"
      subtitle="EKM for encrypting and optionally storing objects"
      />
    </div>
    )
}
export const developers = ()=>{
    return (
    <div className="grid gap-4 lg:h-2xl w-2xl p-2 md:grid-cols-2">
      <SubCard className="w-full  h-20 " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20  " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20 " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20   " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20  " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
    </div>
    )
}
export const resources = ()=>{
    return (
    <div className="grid gap-4 lg:h-2xl w-2xl p-2 md:grid-cols-2">
      <SubCard className="w-full  h-20 " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20  " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20 " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20   " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
      <SubCard className="w-full  h-20  " iconImage={<IoAccessibility className="" />}title="User Management" subtitle="Complete auth & user management platform">
      </SubCard>
    </div>
    )
  }