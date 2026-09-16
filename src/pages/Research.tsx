export const Research = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Selected Research Projects
      </h1>

      <ul className="space-y-8">
        <li className="border-l border-gray-200 pl-6">
          <p className="text-gray-900 font-medium">
            A Distributional Value-Added Framework with Latent Heterogeneity
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            This paper develops a value-added framework in which an
            organization’s effect varies across the individuals matched to it,
            with types on both sides latent. 
          </p>
        </li>

        <li className="border-l border-gray-200 pl-6">
          <p className="text-gray-900 font-medium">
            What Makes a Good Manager? Evidence from Teachers and Principals
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Using matched student–teacher–principal data, this paper investigates whether worker and manager quality are
            complementary, and how each relates to turnover and mobility between
            work places.
          </p>
        </li>

        <li className="border-l border-gray-200 pl-6">
          <p className="text-gray-900 font-medium">
            Universities of Applied Sciences and Intergenerational Mobility
          </p>
          <p className="text-sm text-gray-600 mb-1">
            ---joint with Melanie Häner-Müller and Christoph A. Schaltegger
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Exploiting the staggered rollout of Swiss universities of applied
            sciences in the 1990s, this paper asks whether
            expanding tertiary access for vocational-track students improves
            intergenerational mobility.
          </p>
        </li>

        <li className="border-l border-gray-200 pl-6">
          <p className="text-gray-900 font-medium">
            People- or Place-Based Policies to Tackle Disadvantage? Evidence
            from Matched Family-School-Neighborhood Data
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            This paper estimates how family background, school environment, and
            neighborhood jointly shape children’s test score growth.
          </p>
        </li>
      </ul>
    </section>
  );
};
