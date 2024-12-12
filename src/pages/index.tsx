import NavCard from "@/externals/components/NavCard";
import Table from "@/externals/components/Table";
import { UsersIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <section className="mt-4">
      <div className="card">
        {/* <div className="card-header">
                    <div className="card-title text-primary border-primary border-b">
                        <UsersIcon className='h-4 mr-4' />
                        <span>Daftar Pengguna</span>
                    </div>
                </div> */}
        <NavCard
          navigations={[
            {
              label: (
                <div className="flex">
                  <UsersIcon className="h-4 mr-2" />
                  <span>Daftar Pengguna</span>
                </div>
              ),
              link: "/",
              isActive: true,
            },
          ]}
        />
        <div>
          <Table
            noPaginate={false}
            noSearch={false}
            path="/student-appreciation"
            prototypeTable={[
              {
                title: "nama",
                keyData: "name",
              },
              {
                title: "email",
                keyData: "email",
              },
              {
                title: "status",
                keyData: "status",
              },
            ]}
            data={{
              dataRows: [
                {
                  id: 1,
                  name: "PT Jaya Abadi",
                  email: "hello@gmail.com",
                  status: "Aktif",
                },
              ],
            }}
            actions={"*"}
            type="striped"
          />
        </div>
      </div>
    </section>
  );
}
