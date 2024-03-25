import React from 'react'
import { CloudUploadIcon, FileClockIcon, NotebookTabsIcon, QrCodeIcon } from 'lucide-react'

export const MainPageProblemSection = () => {
  return (
    <div className="w-full h-screen max-w-screen-lg mx-auto flex flex-row items-start justify-between">
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">A probléma</h2>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <FileClockIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                <div className="ms-5 sm:ms-8">
                  <p className="mt-1 text-muted-foreground">
                    Egy kimutatás szerint a magyar könyvelők majdnem fele a munkaideje felét monoton
                    feladatokkal tölti
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <NotebookTabsIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                <div className="ms-5 sm:ms-8">
                  <p className="mt-1 text-muted-foreground">
                    Harmaduk pedig a munkaidő háromnegyedében végez ehhez hasonló adatrögzítő
                    tevékenységet
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              <div>
                <h2 className="text-lg font-bold">
                  A fentieknek köszönhetően a tanácsadásra valamint a kiemelten fontos
                  kapcsolattartásra alig, vagy egyáltalán nem marad idő.
                </h2>
              </div>
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}

      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">A megoldás</h2>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <QrCodeIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                <div className="ms-5 sm:ms-8">
                  <p className="mt-1 text-muted-foreground">
                    Digitális fejlesztéssel a környezeti terhelést már rövid távon is csökkenteni
                    lehet
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <CloudUploadIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                <div className="ms-5 sm:ms-8">
                  <p className="mt-1 text-muted-foreground">Felhő alapú megoldások használata</p>
                </div>
              </div>
              {/* End Icon Block */}
              <div>
                <h3 className="text-lg font-bold">
                  Digitális fejlesztéssel a környezeti terhelést már rövid távon is csökkenteni
                  lehet!
                </h3>
              </div>
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  )
}
