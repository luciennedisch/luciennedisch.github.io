import avatar from "../assets/images/disch_avatar.png";

export const Repositories = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Repositories
      </h1>

      <ul className="space-y-8">
        <li className="border-l border-gray-200 pl-6">
          <p className="text-gray-900 font-medium">
            People- or Place-Based Policies to Tackle Disadvantage
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Replication code and data construction scripts for the project using
            matched family–school–neighborhood data to study children’s test
            score gains.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition"
          >
            <img
              src={avatar}
              alt="Repository avatar"
              className="w-9 h-9 rounded-full border border-gray-200"
            />
            View repository
          </a>
        </li>

        <li className="border-l border-gray-200 pl-6">
          <p className="text-gray-900 font-medium">
            Effects of Family Disruption on Child Development
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Code for empirical analysis examining the role of residential
            relocation following changes in family composition.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition"
          >
            <img
              src={avatar}
              alt="Repository avatar"
              className="w-9 h-9 rounded-full border border-gray-200"
            />
            View repository
          </a>
        </li>
      </ul>
    </section>
  );
};
