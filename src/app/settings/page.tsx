import { Header } from "@/components/Header";
import { SettingsItem } from "@/components/settings/SettingsItem";
import { ToggleSwitch } from "@/components/settings/ToggleSwitch";
import Link from "next/link";

export default function Settings() {
  const NavArrow = () => (
    <div className="text-text-light-secondary dark:text-text-dark-secondary flex size-7 items-center justify-center">
      <span className="material-symbols-outlined">chevron_right</span>
    </div>
  );

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden antialiased">
        <main className="flex-1 pb-16">
          <Header
            title="Settings"
            leftAction={
              <Link href="/" className="material-symbols-outlined text-text-light-primary dark:text-text-dark-primary">
                arrow_back_ios_new
              </Link>
            }
          />

          <div className="px-4 mt-4">
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl">
              <div className="flex items-center gap-4 px-4 py-4 justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3jj4HV-9CuvWFsTnBdlstJDa6cOxfWGXjeGfJPu1Rfnkf-oWp_fC4-sQDUmDxgw0BprlHUQdw1un_8XblBtxNd-DF_JAI7iw9kHv9PPz1DdeO4IPFoCA9g9s_PjRcNEKlJ9X3GMnd4-ZSLRBN2F0S91Q9pGg4Vb5cgj3bwXtggSOuVUbmhi1KMQunb1NL3O_JddqBLQOZqyZoAOTiq5ECgeLa_GlgjT796QspmPfOQrg612olRV_uYNsukJfB1Ujv3sK--_eLPv7U")',
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <p className="text-text-light-primary dark:text-text-dark-primary text-lg font-semibold leading-normal">
                      Eleanor Pena
                    </p>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-normal leading-normal">
                      eleanor.p@email.com
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <NavArrow />
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6 uppercase">
            Preferences
          </h3>
          <div className="px-4">
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl">
              <SettingsItem
                icon="monetization_on"
                iconBgColor="#007AFF"
                label="Default Currency"
                action={
                  <>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                      USD
                    </p>
                    <NavArrow />
                  </>
                }
              />
              <div className="border-b border-gray-200 dark:border-gray-700 ml-16"></div>
              <SettingsItem
                icon="contrast"
                iconBgColor="#5856D6"
                label="App Theme"
                action={
                  <>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                      System
                    </p>
                    <NavArrow />
                  </>
                }
              />
              <div className="border-b border-gray-200 dark:border-gray-700 ml-16"></div>
              <SettingsItem
                icon="language"
                iconBgColor="#34C759"
                label="Language"
                action={
                  <>
                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                      English
                    </p>
                    <NavArrow />
                  </>
                }
              />
            </div>
          </div>

          <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6 uppercase">
            Notifications
          </h3>
          <div className="px-4">
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl">
              <SettingsItem
                icon="notifications"
                iconBgColor="#34C759"
                label="Bill Reminders"
                action={<ToggleSwitch initialChecked />}
              />
              <div className="border-b border-gray-200 dark:border-gray-700 ml-16"></div>
              <SettingsItem
                icon="mail"
                iconBgColor="#FF9500"
                label="Summary Reports"
                action={<ToggleSwitch />}
              />
            </div>
          </div>

          <h3 className="text-text-light-secondary dark:text-text-dark-secondary text-sm font-bold leading-tight tracking-wide px-4 pb-2 pt-6 uppercase">
            Support & Legal
          </h3>
          <div className="px-4">
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl">
              <div className="flex items-center gap-4 min-h-[56px] px-4 py-2 justify-between">
                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-normal leading-normal flex-1">
                  Help Center
                </p>
                <div className="shrink-0">
                  <NavArrow />
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700"></div>
              <div className="flex items-center gap-4 min-h-[56px] px-4 py-2 justify-between">
                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-normal leading-normal flex-1">
                  Privacy Policy
                </p>
                <div className="shrink-0">
                  <NavArrow />
                </div>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700"></div>
              <div className="flex items-center gap-4 min-h-[56px] px-4 py-2 justify-between">
                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-normal leading-normal flex-1">
                  Terms of Service
                </p>
                <div className="shrink-0">
                  <NavArrow />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 mt-6">
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-xl">
              <div className="flex items-center gap-4 min-h-[56px] px-4 py-2 justify-center">
                <button className="text-primary text-base font-normal leading-normal">
                  Log Out
                </button>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700"></div>
              <div className="flex items-center gap-4 min-h-[56px] px-4 py-2 justify-center">
                <button className="text-destructive text-base font-normal leading-normal">
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          <p className="text-text-light-secondary dark:text-text-dark-secondary text-center text-xs mt-8">
            App Version 1.2.3 (Build 1234)
          </p>
        </main>
      </div>
    </div>
  );
}
