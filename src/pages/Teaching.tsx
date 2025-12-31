export const Teaching = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Teaching
      </h1>

      <div className="mb-10">
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          University of Pennsylvania
        </h2>

        <ul className="space-y-3 border-l border-gray-200 pl-6">
          <li>
            <p className="text-gray-900 font-medium">
              Econometric Methods and Models
            </p>
            <p className="text-sm text-gray-600">
              Teaching Assistant · Prof. Xu Cheng
            </p>
          </li>

          <li>
            <p className="text-gray-900 font-medium">Strategic Reasoning</p>
            <p className="text-sm text-gray-600">
              Teaching Assistant · Prof. Deniz Selman
            </p>
          </li>

          <li>
            <p className="text-gray-900 font-medium">
              Introductory Macroeconomics
            </p>
            <p className="text-sm text-gray-600">
              Teaching Assistant · Prof. Luca Bossi
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          University of Zurich
        </h2>

        <ul className="space-y-3 border-l border-gray-200 pl-6">
          <li>
            <p className="text-gray-900 font-medium">
              Chair for Organization and Management
            </p>
            <p className="text-sm text-gray-600">
              Teaching Assistant · Prof. David Seidl
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
